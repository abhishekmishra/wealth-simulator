.PHONY: all

all: background.html

background.html: background.md
	pandoc -s -o background.html background.md