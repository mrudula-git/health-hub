console.log(process.env);

const {mongousername, password} = process.env;

export const database_url="mongodb+srv://"+mongousername+":"+password+"@atlascluster.vipbggr.mongodb.net/peopleDB?retryWrites=true&w=majority&appName=AtlasCluster"