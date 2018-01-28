#!/bin/bash

for DIR in *; do
	if [[ -d ${DIR} ]]; then
		cd ${DIR}

		for FILE in *.pdf
		do
			convert -trim ${FILE} "`basename ${FILE} .pdf`.png"
		done

		#for EXTRADIR in *; do
		#	if [[ -d ${EXTRADIR} ]]; then
		#		cd ${EXTRADIR}

		#		for FILE in *.pdf
		#		do
		#			convert -trim ${FILE} "`basename ${FILE} .pdf`.png"
		#		done

		#		cd ..
		#	fi
		#done

		cd ..
	fi
done
