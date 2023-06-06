import { DataTypes, sequelize } from "../../connection";

const UserRoleShema = sequelize.define("users_roles", {
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
        field:'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        field:'updated_at'
    },
},
    { underscored: true, tableName: 'users_roles',timestamps: true }
);

export default UserRoleShema;
