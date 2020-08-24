'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-24 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1769';
    this._commitGIT = 'b1955bbb2d6049c23b4cf54c437746396f0b2ada';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}