FROM mongo:latest
ADD crime_incident_reports.datadump-2.csv crime_incident_reports.datadump-2.csv
ADD grade.csv grade.csv
ADD user.csv user.csv
ADD import-data.sh import-data.sh
RUN apt-get update
RUN apt-get install netcat -y