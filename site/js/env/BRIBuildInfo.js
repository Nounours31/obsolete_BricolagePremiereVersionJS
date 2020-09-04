'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-04 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1812';
    this._commitGIT = '8042da9491fffc05b31c3738ca6ee228c41f38ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}