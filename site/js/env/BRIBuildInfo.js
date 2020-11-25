'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-25 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-2140';
    this._commitGIT = '620aa698371cb9c38c7b89e197c9926358cb5866';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}