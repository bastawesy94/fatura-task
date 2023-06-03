import { DataTypes, sequelize } from "../../connection";
import PermissionSchema from "./permissions.schema";

const RoleSchema = sequelize.define("roles", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    role_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
RoleSchema.belongsTo(PermissionSchema);
export default RoleSchema;
