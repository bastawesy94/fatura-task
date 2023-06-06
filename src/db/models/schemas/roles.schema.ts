import { DataTypes, sequelize } from "../../connection";

const RoleSchema = sequelize.define("roles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        field:'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        field:'updated_at'
    },
});
export default RoleSchema;
