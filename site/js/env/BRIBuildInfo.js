'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-28 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1418';
    this._commitGIT = '53ea998e7975c01e492e7855337657a4e45bf548';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}