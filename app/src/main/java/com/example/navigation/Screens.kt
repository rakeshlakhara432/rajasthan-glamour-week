package com.example.navigation

import kotlinx.serialization.Serializable

sealed interface Screen {
    @Serializable data object Splash : Screen
    @Serializable data object Onboarding : Screen
    @Serializable data object Auth : Screen
    @Serializable data object Home : Screen
    @Serializable data object EventList : Screen
    @Serializable data class EventDetail(val id: String) : Screen
    @Serializable data object LiveStream : Screen
    @Serializable data object ModelRegistration : Screen
    @Serializable data object DesignerRegistration : Screen
    @Serializable data object SponsorRegistration : Screen
    @Serializable data object TicketWallet : Screen
    @Serializable data object Gallery : Screen
    @Serializable data object Profile : Screen
    @Serializable data object Settings : Screen
    @Serializable data object AiAssistant : Screen
}
