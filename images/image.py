
from PIL import Image
from PIL.ExifTags import TAGS
import os

dir_path = "."

for (root, folders, files) in os.walk(dir_path):
	
	for file in files:
		file_path = os.path.join(root, file)
		
		if file_path.find(".jpeg") == -1:
			continue
		else:
			# print(file_path)
			image = Image.open(file_path)
			info = image._getexif()
			image.close()

			# 새로운 딕셔너리 생성
			taglabel = {}

			for tag, value in info.items():
				decoded = TAGS.get(tag, tag)
				taglabel[decoded] = value

			exifGPS = taglabel['GPSInfo']

			lat = str(int(exifGPS[4][0]))+"° " + \
				str(int(exifGPS[4][1]))+"' "+str(exifGPS[4][2])+"\" E"
			lon = str(int(exifGPS[2][0]))+"° " + \
				str(int(exifGPS[2][1]))+"' "+str(exifGPS[2][2])+"\" N"

			print(file_path, lat, lon)
