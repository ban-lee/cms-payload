import json
import csv

def translate_archetype(archetype):
  match archetype:
    # Casters
    case 'funnel':
      return 'mech-accord'
    case 'mystic':
      return 'mysticcaster'
    case 'chain':
      return 'chaincaster'
    case 'phalanx':
      return 'phalanxcaster'
    # Medics
    case 'physician':
      return 'medic'
    case 'ringhealer':
      return 'multi-targetmedic'
    case 'healer':
      return 'therapist'
    case 'wandermedic':
      return 'wanderingmedic'
    # Vanguards
    case 'bearer':
      return 'standardbearer'
    # Snipers
    case 'fastshot':
      return 'marksman'
    case 'aoesniper':
      return 'artilleryman'
    case 'reaperrange':
      return 'spreadshooter'
    case 'longrange':
      return 'deadeye'
    case 'closerange':
      return 'heavyshooter'
    case 'siegesniper':
      return 'besieger'
    case 'bombarder':
      return 'flinger'
    # Specialists
    case 'stalker':
      return 'ambusher'
    case 'pusher':
      return 'pushstroker'
    case 'traper':
      return 'trapmaster'
    # Supporters
    case 'slower':
      return 'decelbinder'
    case 'craftsman':
      return 'artificier'
    case 'underminer':
      return 'hexer'
    case 'blessing':
      return 'abjurer'
    # Defenders
    case 'unyield':
      return 'juggernaut'
    # EN doesn't have shot protectors yet
    case 'shotprotector':
      return 'protector'
    # Guards
    case 'fearless':
      return 'dreadnought'
    case 'sword':
      return 'swordmaster'
    case _:
      return archetype

with open('data/en_US/character_table.json') as en_json_file:
    character_json = json.load(en_json_file)

characters_csv = {}

for key in character_json:
    if key.startswith('char_'):
        charId = key
        name = character_json[key]['name']
        rarity = character_json[key]['rarity'] + 1
        profession = character_json[key]['profession']
        archetype = translate_archetype(character_json[key]['subProfessionId'])

        character = [charId, name, rarity, profession, archetype]
        characters_csv[charId] = character

en_json_file.close()

with open('data/zh_CN/character_table.json') as cn_json_file:
    character_json = json.load(cn_json_file)

for key in character_json:
    if key.startswith('char_') and key not in characters_csv:
        charId = key
        name = character_json[key]['appellation']
        rarity = character_json[key]['rarity'] + 1
        profession = character_json[key]['profession']
        archetype = translate_archetype(character_json[key]['subProfessionId'])

        character = [charId, name, rarity, profession, archetype]
        characters_csv[charId] = character

# now we will open a file for writing
with open('data/output/character_table.csv', 'w') as output_file:
    character_writer = csv.writer(output_file)

    character_writer.writerow(['charId', 'name', 'rarity', 'class', 'archetype'])

    for key in characters_csv:
        character_writer.writerow(characters_csv[key])

output_file.close()
