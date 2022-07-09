import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbButtonModule, NbCardModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";


@NgModule({
    imports:[
        NbCardModule,
        NbInputModule,
        FormsModule,
        ReactiveFormsModule,
        NbButtonModule,
        NbTreeGridModule,
        CommonModule
    ],
    declarations:[

    ],
    exports:[

    ]
})

export class SharedModule{}