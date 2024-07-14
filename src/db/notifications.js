import dayjs from 'dayjs';

const notifications = [
    {
        id: 'notification-2',
        title: '¡Has Recibido Un Nuevo Depósito!',
        text: `¡Tienes un depósito en espera de 1,250.00€ en tu cuenta! 
                Completa el pago por impuestos para desbloquearlo. Echale un vistazo`,
        read: false,
        date: dayjs().subtract(2, 'day'),
    }
];

export default notifications