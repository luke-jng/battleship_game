const Ship = (shipType, shipLength) => {
    let _shipType = shipType;
    let _shipLength = shipLength;
    let _shipSunk = false;
    let _shipDamage = 0

    const getShipType = () => {
        return _shipType;
    }
    const getShipDamage = () => {
        return _shipDamage;
    }
    const getShipLength = () => {
        return _shipLength;
    }
    const isHit = () => {
        _shipDamage++;
    }

    const isSunk = () => {
        if (_shipDamage >= _shipLength) {
            _shipSunk = true;
        } 
        return _shipSunk;
    }
    return {isHit, isSunk, getShipType, getShipDamage, getShipLength};
};


export default Ship