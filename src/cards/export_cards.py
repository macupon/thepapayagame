import json
from datetime import datetime

level = 1

json_file = f"./cards/cards_level{level}.json"

# Abre el archivo de base de datos en formato JSON
with open(json_file, 'r') as archivo_json:
    # Carga los datos de JSON a un objeto Python
    base_de_datos = json.load(archivo_json)

# Obtiene la fecha de hoy en el formato deseado
fecha_hoy = datetime.today().strftime('%Y-%m-%d')

# Abre el archivo de texto para escribir los datos
with open(f'cards_nivel{level}_{fecha_hoy}.txt', 'w') as archivo_texto:
    # Recorre todos los items en la base de datos y escribe el texto de cada uno en una línea separada del archivo de texto
    for item in base_de_datos:
        archivo_texto.write(f"{item['id']}: {item['text']}" + '\n')