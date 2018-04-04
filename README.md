# TT projekt

Meie oleme nii tublid, sest:

Meie ei pushi reposse:

-lock faile

-node_modules kausta

-build kausta

-src\main\resources\application.yml

-.idea kausta


### Frontendi jooksutamiseks:
    
    cd frontend
    au run --watch


### Backendi jooksutamiseks:
    
    gradle bootRun
    kui väga suures hädas oled, siis gradle install võib ka aidata


#### Kui npm install ei tööta:

Proovi terminal avada administraatori õigustega

CMD -> "Run as administrator"
    


#### Kui node_modules kausta pole

    cd frontend
    npm install
    
#### Kui backend kaustas pole build kausta

    gradle bootRun
