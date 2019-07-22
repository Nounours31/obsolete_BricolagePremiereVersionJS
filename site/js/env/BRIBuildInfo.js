'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-22 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-171';
    this._commitGIT = '071a57903a71912f6834fbf43449eeb9170aa0cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}