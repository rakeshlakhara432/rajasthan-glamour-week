package com.example.data.models

import androidx.room.Entity
import androidx.room.PrimaryKey
import kotlinx.serialization.Serializable

@Serializable
@Entity(tableName = "events")
data class Event(
    @PrimaryKey val id: String,
    val title: String,
    val description: String,
    val date: String,
    val time: String,
    val venue: String,
    val imageUrl: String,
    val category: String,
    val designerName: String = "",
    val isLive: Boolean = false,
    val videoUrl: String? = null
)

@Serializable
@Entity(tableName = "user_profile")
data class User(
    @PrimaryKey val uid: String,
    val fullName: String,
    val email: String,
    val phoneNumber: String = "",
    val profileImageUrl: String = "",
    val role: String = "GUEST" // GUEST, MODEL, DESIGNER, SPONSOR, ADMIN
)
