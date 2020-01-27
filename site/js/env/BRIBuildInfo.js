'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-27 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-928';
    this._commitGIT = '2076581a50faef0b7610d75733087fc82389d3fe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}