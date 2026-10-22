import urllib.request
import re

req = urllib.request.Request(
    'https://www.pinterest.com/pin/970525788470144809/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)
try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        
        matches = re.findall(r'"title":"([^"]+)"', content)
        for t in list(set(matches))[:10]:
            print('Title:', t.encode('ascii', 'ignore').decode('ascii'))
        
        matches_desc = re.findall(r'"description":"([^"]+)"', content)
        for d in list(set(matches_desc))[:10]:
            print('Desc:', d.encode('ascii', 'ignore').decode('ascii'))
            
        link = re.findall(r'"link":"([^"]+)"', content)
        print('Links found:', link)

except Exception as e:
    print('Error:', e)
