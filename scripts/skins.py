import json
import csv

file_name = 'skin_table.json'

def convertBrand(brandId):
  brand = brandId.split('#')[1]

  match brand:
    # Test Collection'
    case 'sale':
      return '1'
    case 'epoque':
      return '2'
    # Made by 0011
    case 'nian':
      return '3'
    # 0011/Tempest
    case 'whirlwind':
      return '4'
    # Coral Coast
    case 'summer':
      return '5'
    case 'marthe':
      return '6'
    case 'witch':
      return '7'
    # Cambrian
    case 'winter':
      return '8'
    # Icefield Messenger
    case 'xmas':
      return '9'
    # Vitafield
    case 'wild':
      return '10'
    # Raythean Pioneer
    case 'sweep':
      return '11'
    # Raythean Striker
    case 'striker':
      return '12'
    # Bloodline of Combat
    case 'boc':
      return '13'
    # Collab Series
    case 'wwf' | 'rainbow6' | 'it' | 'kfc' | 'lxh':
      return '18'
    case 'kitchen':
      return '14'
    # Dreambind Castle
    case 'ghost':
      return '15'
    # Whistlewind
    case 'race':
      return '16'
    case 'as' | 'ambienceSynesthesia':
      return '17'
    case 'shining':
      return '19'
    case 'game':
      return '20'
    case _:
      return ''

def isDefault(skinData):
  return skinData['skinGroupId'] == 'ILLUST_0' or skinData['skinGroupId'] == 'ILLUST_1' or skinData['skinGroupId'] == 'ILLUST_2'

with open('data/en_US/' + file_name) as en_json_file:
    skin_table = json.load(en_json_file)

skins_csv = {}

char_skins = skin_table['charSkins']
for key in char_skins:
    skinData = char_skins[key]['displaySkin']

    if not key.startswith('char_') or isDefault(skinData):
      continue

    skinId = char_skins[key]['skinId']
    charId = char_skins[key]['charId']
    name = skinData['skinName']
    imgId = char_skins[key]['avatarId']
    brand = convertBrand(skinData['skinGroupId'])

    skin = [skinId, charId, name, brand, imgId]
    skins_csv[skinId] = skin

en_json_file.close()

with open('data/zh_CN/' + file_name) as cn_json_file:
    skin_table = json.load(cn_json_file)

char_skins = skin_table['charSkins']
for key in char_skins:
    skinData = char_skins[key]['displaySkin']

    if not key.startswith('char_') or isDefault(skinData) or key in skins_csv:
      continue

    skinId = char_skins[key]['skinId']
    charId = char_skins[key]['charId']
    name = skinData['skinName']
    imgId = char_skins[key]['avatarId']
    brand = convertBrand(skinData['skinGroupId'])

    skin = [skinId, charId, name, brand, imgId]
    skins_csv[skinId] = skin

cn_json_file.close()

# now we will open a file for writing
with open('data/output/skin_table.csv', 'w') as output_file:
    skin_writer = csv.writer(output_file)
    skin_writer.writerow(['skinId', 'charId', 'name', 'brand', 'imgId'])

    for key in skins_csv:
        skin_writer.writerow(skins_csv[key])

output_file.close()
