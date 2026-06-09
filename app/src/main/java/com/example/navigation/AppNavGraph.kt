package com.example.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.toRoute
import com.example.ui.ai.AiAssistantScreen
import com.example.ui.auth.AuthScreen
import com.example.ui.home.HomeScreen
import com.example.ui.home.HomeViewModel
import com.example.ui.livestream.LiveStreamScreen
import com.example.ui.onboarding.OnboardingScreen
import com.example.ui.registration.ModelRegistrationScreen
import com.example.ui.splash.SplashScreen
import com.example.ui.tickets.TicketWalletScreen

@Composable
fun AppNavGraph(
    navController: NavHostController,
    homeViewModel: HomeViewModel
) {
    NavHost(
        navController = navController,
        startDestination = Screen.Splash
    ) {
        composable<Screen.Splash> {
            SplashScreen(onAnimationFinished = {
                navController.navigate(Screen.Onboarding) {
                    popUpTo(Screen.Splash) { inclusive = true }
                }
            })
        }

        composable<Screen.Onboarding> {
            OnboardingScreen(onFinished = {
                navController.navigate(Screen.Auth) {
                    popUpTo(Screen.Onboarding) { inclusive = true }
                }
            })
        }

        composable<Screen.Auth> {
            AuthScreen(onLoginSuccess = {
                navController.navigate(Screen.Home) {
                    popUpTo(Screen.Auth) { inclusive = true }
                }
            })
        }

        composable<Screen.Home> {
            HomeScreen(
                viewModel = homeViewModel,
                onEventClick = { id -> 
                    // Handle Navigation to detail
                    if (id == "1") {
                        navController.navigate(Screen.LiveStream)
                    }
                },
                onProfileClick = {
                    navController.navigate(Screen.TicketWallet)
                }
            )
        }

        composable<Screen.LiveStream> {
            LiveStreamScreen(
                videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Demo URL
                onBack = { navController.popBackStack() }
            )
        }

        composable<Screen.TicketWallet> {
            TicketWalletScreen(onBack = { navController.popBackStack() })
        }
        
        // Add more routes as needed
    }
}
