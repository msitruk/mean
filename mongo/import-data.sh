#!/bin/bash
while ! nc -z localhost 27017; do sleep 10; done
mongoimport -d mean -c crimeincidents --type csv --file /crime_incident_reports.datadump-2.csv --headerline
mongoimport -d mean -c grades --type csv --file /grade.csv --headerline
mongoimport -d mean -c users --type csv --file /user.csv --headerline
#insérer ici les commandes pour insérer de nouvelle collection 