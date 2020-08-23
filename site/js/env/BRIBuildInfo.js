'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-23 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1765';
    this._commitGIT = '783a4be965f59ef74dcf1c2dcff0207de30cead8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}