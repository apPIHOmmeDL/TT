#TT projekt

Meie oleme nii tublid, sest:

Meie ei pushi reposse:

-lock faile

-node_modules kausta

-build kausta

### Frontendi jooksutamiseks:
    
    cd frontend
    au run --watch


### Backendi jooksutamiseks:
    
    käivita mariaDB pordil 3306
    gradle bootRun

#### Kui npm install ei tööta:

Proovi terminal avada administraatori õigustega

CMD -> "Run as administrator"
    


#### Kui node_modules kausta pole

    cd frontend
    npm install
    
#### Kui backend kaustas pole build kausta

    gradle bootRun