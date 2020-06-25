'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-25 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1529';
    this._commitGIT = '077cfab227ba7f018c08f9c3305af29da38bd62e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}