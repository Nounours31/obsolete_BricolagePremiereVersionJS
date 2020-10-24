'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-24 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2012';
    this._commitGIT = '80ff6299430849e70f0ebf25f9a97ef178cb0d03';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}