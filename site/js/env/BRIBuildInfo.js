'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-03 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1316';
    this._commitGIT = 'd7e6196134fe009a305800baae3878681ded4e12';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}