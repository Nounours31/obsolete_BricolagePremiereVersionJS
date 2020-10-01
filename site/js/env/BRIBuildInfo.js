'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-01 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1919';
    this._commitGIT = '6577fadf2c8c05f57407d3f74d619954c6591b81';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}