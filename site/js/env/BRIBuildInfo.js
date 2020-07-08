'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-08 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1580';
    this._commitGIT = '6e844199b123ce9812d5bf9239c58349efba796f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}