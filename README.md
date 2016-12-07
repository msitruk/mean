# Installer tous les containers, les lancer et importer les données dans mongo via le script import-data.sh :<br/>
docker-compose up --build -d && docker exec -ti mongo /bin/bash ./import-data.sh<br/><br />

# Après un docker-compose stop pour relancer il suffit d'un :<br />
docker-compose up -d<br /><br />

# GIT CLI <br />
pwd : savoir où l’on est, indique le chemin depuis la racine<br />
git status : savoir si des fichiers ont été modifiés<br />
git log : liste les commits effectués<br />
git branch : savoir sur quelle branche on est<br />
git checkout test : se positionner sur la branche branch test<br />
git clone : crée une copie locale d’un projet<br />
git remove -v : liste les projets git<br />
git fetch : récupérer le travail d’un répertoire sur notre copie locale<br />
git merge origin/master : merge origin/master sur notre branche locale<br />
git add test : ajouter un nouveau fichier<br />
git commit -m "message" : envoyer un nouveau fichier<br />
git push origin : push la branche locale sur le répertoire d'origine<br /><br />

# DOCKER CLI<br />
docker pull : récupérer un conteneur<br />
docker exec -ti NOM_APP /bin/bash : se connecter sur le conteneur<br />
exit : sortir du conteneur<br />
docker logs NOM_APP : afficher les logs de l'app<br />
docker ps : afficher les app en cours<br />
docker ps -a : afficher les app utilisées auparavant<br />
docker kill NOM_APP: stopper l'instance en cours<br />
docker rm NOM_APP : supprimer définitivement l'app<br />
docker images : lister les images installées<br />
docker rmi NOM_APP : supprimer l’image X<br />
docker --help : documentation<br />
docker run --name NOM_APP -v /yourPath:/var/lib/... -p port:port -d NOM_APP<br />
docker build -t : créer une image ?<br />
docker run --name NOM_APP -p 8082:2368 -d NOM_APP : créer une image ?<br />
docker-compose up -d : lancer un conteneur<br />
docker-compose stop : arrêter tous les conteneurs<br />
docker -ti APP1 ping APP2 : vérifier la connexion entre 2 apps<br />
docker stop $(docker ps -a -q) : arrêter tous les conteneurs<br />
docker rm $(docker ps -a -q) : supprimer tous les conteneurs<br />
docker rmi $(docker images -q) : supprimer toutes les images<br />

# Installer tous les containers, les lancer et importer les données dans mongo via le script import-data.sh :<br/>
docker-compose up --build -d && docker exec -ti mongo /bin/bash ./import-data.sh<br/><br />

# Après un docker-compose stop pour relancer il suffit d'un :<br />
docker-compose up -d<br /><br />

# Racourci pour max le feignant<br />
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q) && docker rmi $(docker images -q)<br />