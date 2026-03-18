//
//  MathHelper1App.swift
//  MathHelper1
//
//  Created by Valdrin Qerimi on 15.2.26.
//

import SwiftUI
import CoreData

@main
struct MathHelper1App: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
