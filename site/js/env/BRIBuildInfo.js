'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-20 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-899';
    this._commitGIT = 'd5021835f4d5cc2ffcef457a33da3af355fd2428';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}