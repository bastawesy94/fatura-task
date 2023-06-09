import { DataTypes, sequelize } from "../../connection";

const PermissionSchema = sequelize.define("permissions", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    permission_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
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

export default PermissionSchema;
