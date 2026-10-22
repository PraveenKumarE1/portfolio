import urllib.request

video_url = 'https://v1.pinimg.com/videos/iht/expMp4/ce/bd/2a/cebd2aa1d7ed8cb45e2ea683ef978dc1_720w.mp4'
req = urllib.request.Request(
    video_url,
    headers={'User-Agent': 'Mozilla/5.0'}
)
try:
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
        with open('pin_video.mp4', 'wb') as f:
            f.write(data)
        print('Downloaded pin_video.mp4 successfully, size:', len(data))
except Exception as e:
    print('Error downloading video:', e)
