'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1776';
    this._commitGIT = 'b5f60d9514bb237b3089ba89e904f8ccd414f109';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}