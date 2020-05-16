'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-16 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1370';
    this._commitGIT = '791fca7b7a67797e76233b3f53e88d71504642d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}