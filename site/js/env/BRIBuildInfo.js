'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-20 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1264';
    this._commitGIT = '1277b556b8b6fe8358beec0aafb98b427b961d59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}