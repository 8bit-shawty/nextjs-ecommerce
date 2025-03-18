import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export default function AdminDashboard(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
            <CardHeader>Sales</CardHeader>
            <CardDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. !</CardDescription>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio atque vel animi veniam at cum beatae tenetur qui! Tenetur?</p>
            </CardContent>
        </Card>
    </div>
}