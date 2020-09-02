from shutil import copyfile
from os import listdir

from os.path import isfile, join
before = [f for f in listdir('.') if isfile(join('.', f)) and f.endswith("@1x.png")]
after = [s.replace("@1x.png", ".png") for s in before]
for i in range(len(before)):
    copyfile(before[i], after[i])