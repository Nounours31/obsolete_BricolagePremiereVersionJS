'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-02 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1068';
    this._commitGIT = 'a7a24bc6c8ff4a35874c18c3752dea24ab5dee9b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}