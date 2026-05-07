const https = require('https')

const CLIENT_ID = 'Iv23lijPGtmq0ERorydm' // GitHub OAuth App client ID (public)

function request(method, hostname, path, headers, body) {
  return new Promise((resolve, reject) => {
    const opts = { method, hostname, path, headers }
    const req = https.request(opts, res => {
      let data = ''
      res.on('data', c => data += c)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }) }
        catch { resolve({ status: res.statusCode, data }) }
      })
    })
    req.on('error', reject)
    if (body) req.write(JSON.stringify(body))
    req.end()
  })
}

async function deviceFlow() {
  // Step 1: Get device code
  const resp = await request('POST', 'github.com', '/login/device/code', {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }, {
    client_id: CLIENT_ID,
    scope: 'repo,workflow',
  })

  if (resp.data.error) {
    console.error('Error:', resp.data)
    process.exit(1)
  }

  console.log('\n========================================')
  console.log('  请在浏览器中打开以下链接并输入验证码：')
  console.log('========================================')
  console.log(`\n  URL: ${resp.data.verification_uri}`)
  console.log(`  验证码: ${resp.data.user_code}`)
  console.log('\n========================================\n')
  console.log('等待授权...')

  // Step 2: Poll for token
  const interval = resp.data.interval || 5
  const expiresIn = resp.data.expires_in || 900
  const start = Date.now()

  while (Date.now() - start < expiresIn * 1000) {
    await new Promise(r => setTimeout(r, interval * 1000))

    const tokenResp = await request('POST', 'github.com', '/login/oauth/access_token', {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, {
      client_id: CLIENT_ID,
      device_code: resp.data.device_code,
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
    })

    if (tokenResp.data.access_token) {
      console.log('授权成功！')
      console.log(`TOKEN=${tokenResp.data.access_token}`)
      return tokenResp.data.access_token
    }

    if (tokenResp.data.error === 'authorization_pending') {
      console.log('  等待中...')
      continue
    }

    if (tokenResp.data.error) {
      console.error('授权错误:', tokenResp.data.error_description)
      process.exit(1)
    }
  }

  console.error('授权超时')
  process.exit(1)
}

deviceFlow()
