import conf from "../conf/conf";
import { Client,  ID , Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status,userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error);
            
        }
    }

    async updatePost({title, slug, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error :: ", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }catch(error){
            console.log("Appwrite service :: deletePost :: error :: ", error);
            return false
        }

    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error :: ", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error :: ", error);
            return false;
        }
    }

    async uplodFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error :: ", error);
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error :: ", error);
            return false;

        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;