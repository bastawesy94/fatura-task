import { DataTypes, sequelize } from "../../connection";

const RoleShema = sequelize.define("users_roles", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    role_id: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
});

export default RoleShema;
