import json
import random

new_card = {
        "level": 1,
        "text": """PLAYER1, have you ever squirted? If yes, do you do it frequently? And how does it compare to your normal orgasms? """,
        "player_has": "",
        "player_into": "",
        "others_have":"",
        "others_into":"",
        "num_players": "1",
        "interaction": "soft",
        "objects": "",
        "undressing": "No"
}


# Open the JSON file and read its contents into a variable
level = new_card["level"]
json_file = f"./cards/cards_level{level}.json"

with open(json_file, 'r') as f:
    database = json.load(f)

# Extract all the "id" numbers from the cards in the database
existing_ids = [card['id'] for card in database]
existing_texts = [card['text'] for card in database]

# Check if the new "text" string is already in the list of existing "text" strings
if new_card["text"] in existing_texts:
    print("\n\nCard not added: Card with same text already exists in database.\n\n")

else:
    # Generate a new random "id" number until you find one that is not already in the list of existing "id" numbers
    new_id = None
    while new_id is None or new_id in existing_ids:
        new_id = random.randint(1, 1000)

    # Add the new "id" number to the new card dictionary at the beginning
    new_card = {"id": new_id, **new_card}

    # Append a new element to the JSON object
    database.append(new_card)
    print(f"\nnew card added: {new_card['text']}\n")
    print(f"Total cards = {len(existing_ids)}\n")

    # Write the updated JSON object back to the file
    with open(json_file, 'w') as f:
        json.dump(database, f, indent=4)
