/**
 * Created by rahul j jadav on 3/4/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.profile')
    .controller('ProfileController', ProfileController)

  ProfileController.$inject=[];

  function ProfileController() {
    var profile = this;
    profile.profileInfo = {
      name: 'Rahul Jadav',
      mobileNumber: '9909844451',
      email: 'rj.jadav22@gmail.com',
      gender: 'male',
      dob: '20/10/1990',
      profilePic: 'http://www.webassist.com/account/attachments/1/cache/images/account/crop/generic-avatar_w288_h288/generic-avatar_03161254.png'
    }

    profile.kycVault = [
      {
        document: 'Pan Card',
        uploaded: true,
        status: 'Usable',
        verified: true,
        uploadRequired: false,
        kyc: 'I'
      },
      {
        document: 'Aadhar Card',
        uploaded: false,
        status: 'Not Usable',
        verified: false,
        uploadRequired: true,
        kyc: 'IA'
      },
      {
        document: 'Voter Id',
        uploaded: true,
        status: 'usable',
        verified: true,
        uploadRequired: false,
        kyc: 'IA'
      },
      {
        document: 'Driving Licence',
        uploaded: true,
        status: 'Usable',
        verified: false,
        uploadRequired: false,
        kyc: 'IA'
      },
      {
        document: 'Passport',
        uploaded: false,
        status: 'Not Usable',
        verified: false,
        uploadRequired: true,
        kyc: 'I'
      },
      {
        document: 'Electricity Bill(Latest 3 months)',
        uploaded: true,
        status: 'Expired',
        verified: 'Upload Again',
        uploadRequired: true,
        kyc: 'A'
      },
      {
        document: 'Landline Bill(Latest 3 months)',
        uploaded: false,
        status: 'Not Usable',
        verified: false,
        uploadRequired: true,
        kyc: 'A'
      },
      {
        document: 'Water Bill(Latest 3 months)',
        uploaded: false,
        status: 'Not Usable',
        verified: false,
        uploadRequired: true,
        kyc: 'A'
      },
      {
        document: 'Ration Card',
        uploaded: false,
        status: 'Not Usable',
        verified: false,
        uploadRequired: true,
        kyc: 'IA'
      },
    ];
  }
})();
