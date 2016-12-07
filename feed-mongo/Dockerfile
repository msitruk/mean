FROM mongo:latest
ADD crime_incident_reports.datadump-2.csv crime_incident_reports.datadump-2.csv
RUN apt-get update
RUN apt-get install netcat -y
#RUN while ! nc -z mongo 27017; do sleep 10; done
#RUN mongoimport --host mongo -d mean -c crimeIncidents --type csv --file crime_incident_reports.datadump-2.csv --headerline