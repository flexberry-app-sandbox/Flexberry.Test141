﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test14
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагент.
    /// </summary>
    // *** Start programmer edit section *** (Контрагент CustomAttributes)

    // *** End programmer edit section *** (Контрагент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентE", new string[] {
            "КодКлиента as \'Код клиента\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Номер as \'Номер\'"})]
    [View("КонтрагентL", new string[] {
            "КодКлиента as \'Код клиента\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Номер as \'Номер\'"})]
    public class Контрагент : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКлиента;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private int fНомер;
        
        // *** Start programmer edit section *** (Контрагент CustomMembers)

        // *** End programmer edit section *** (Контрагент CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Имя CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Имя Get start)

                // *** End programmer edit section *** (Контрагент.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Контрагент.Имя Get end)

                // *** End programmer edit section *** (Контрагент.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Имя Set start)

                // *** End programmer edit section *** (Контрагент.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Контрагент.Имя Set end)

                // *** End programmer edit section *** (Контрагент.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.КодКлиента CustomAttributes)

        // *** End programmer edit section *** (Контрагент.КодКлиента CustomAttributes)
        [NotNull()]
        public virtual int КодКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.КодКлиента Get start)

                // *** End programmer edit section *** (Контрагент.КодКлиента Get start)
                int result = this.fКодКлиента;
                // *** Start programmer edit section *** (Контрагент.КодКлиента Get end)

                // *** End programmer edit section *** (Контрагент.КодКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.КодКлиента Set start)

                // *** End programmer edit section *** (Контрагент.КодКлиента Set start)
                this.fКодКлиента = value;
                // *** Start programmer edit section *** (Контрагент.КодКлиента Set end)

                // *** End programmer edit section *** (Контрагент.КодКлиента Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Номер CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Номер Get start)

                // *** End programmer edit section *** (Контрагент.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Контрагент.Номер Get end)

                // *** End programmer edit section *** (Контрагент.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Номер Set start)

                // *** End programmer edit section *** (Контрагент.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Контрагент.Номер Set end)

                // *** End programmer edit section *** (Контрагент.Номер Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Отчество CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Отчество Get start)

                // *** End programmer edit section *** (Контрагент.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Контрагент.Отчество Get end)

                // *** End programmer edit section *** (Контрагент.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Отчество Set start)

                // *** End programmer edit section *** (Контрагент.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Контрагент.Отчество Set end)

                // *** End programmer edit section *** (Контрагент.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Фамилия Get start)

                // *** End programmer edit section *** (Контрагент.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Контрагент.Фамилия Get end)

                // *** End programmer edit section *** (Контрагент.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Фамилия Set start)

                // *** End programmer edit section *** (Контрагент.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Контрагент.Фамилия Set end)

                // *** End programmer edit section *** (Контрагент.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентE", typeof(IIS.Test14.Контрагент));
                }
            }
            
            /// <summary>
            /// "КонтрагентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентL", typeof(IIS.Test14.Контрагент));
                }
            }
        }
    }
}
