import PropTypes from 'prop-types';
import Card from '../../UI/Card.js';
import './MedicineCard.css';

Card.propTypes = {
    onClick: PropTypes.func,
    isParentHovering: PropTypes.bool
};

export default function MedicineCard({ medicine, onClick, isParentHovering = false }) {
    // Properties ----------------------------------
    // Hooks ---------------------------------------
    // Context -------------------------------------
    // Methods -------------------------------------
    // View ----------------------------------------
    return (
        <Card  className={"Card" + (isParentHovering ? " Hovering" : "")} onClick={onClick}>
            
            <div className="MedicineCard">
                {`For today, you need to take the following  Medicine Name: ${ medicine.MedicineName} Amount: ${medicine.PrescriptionDosage}`}    
            </div>
        </Card>
    );
}

Container.propTypes = {
    className: PropTypes.string
};

function Container({ children, className = "" }) {
    return (
        <div className={"CardContainer " + className}>
            {children}
        </div>
    );
}

// -----------------------------------------
// Compose Card Object /////////////////////
// -----------------------------------------

Card.Container = Container;