.PHONY: all

all: background.html

background.html: background.md
	pandoc  -s -o background.html --table-of-contents=true background.md

clean:
	rm -f background.html